import {FC, useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {loadStoryblokBridge, StoryblokBridgeV2} from '@storyblok/js';
import {useEffectOnce} from 'react-use';

export const StoryblokBridge: FC = () => {
  const router = useRouter();
  const [bridgeInstance, setBridgeInstance] = useState<StoryblokBridgeV2>();

  const onPublished = useCallback(async ($event?: StoryblokEventPayload) => {
    router.reload();
  }, [router]);

  const onUnpublished = useCallback(async () => {
    router.reload();
  }, [router]);

  const onChange = useCallback(async ($event?: StoryblokEventPayload) => {
    if (!$event) {
      return router.reload();
    }

    if ($event.slugChanged) {
      const options = {unstable_skipClientCache: true};
      return await router.push(`/${$event.slug}`, `/${$event.slug}`, options);
    }

    const options = {scroll: false, unstable_skipClientCache: true};
    await router.replace(`/${$event.slug}`, `/${$event.slug}`, options);
  }, [router]);

  useEffectOnce(() => {
    loadStoryblokBridge()
      .then(() => setBridgeInstance(new window.StoryblokBridge({})));
  })

  useEffect(() => {
    if (!bridgeInstance) {
      return;
    }

    bridgeInstance.on('published', onPublished);
    bridgeInstance.on('unpublished', onUnpublished);
    bridgeInstance.on('change', onChange);
  }, [bridgeInstance, onPublished, onUnpublished, onChange])

  return null;
}
