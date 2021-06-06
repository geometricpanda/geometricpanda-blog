import { ContentfulResponse } from './interface';

const {
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID: spaceId,
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: publicAccessToken,
  NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  previewAccessToken,
} = process.env;

const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

export const callContentful = async <T>(
  query,
  preview = false
): Promise<ContentfulResponse<T>> => {
  const accessToken = preview ? previewAccessToken : publicAccessToken;

  const body: string = JSON.stringify({ query });

  const fetchOptions = {
    method: 'POST',
    body,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  let response;

  try {
    response = await fetch(apiUrl, fetchOptions);
  } catch (error) {
    throw new Error(error);
  }

  if (response.status !== 200) {
    throw new Error(response);
  }

  return response.json();
};
