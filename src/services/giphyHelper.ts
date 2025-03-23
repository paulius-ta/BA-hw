import { Gif, GifResponse } from "/types/Gif.ts";

export const transformGifData = (gifResponse: GifResponse): Gif[] => {
  const transformedData = gifResponse.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    images: {
      fixed_height_small: {
        url: gif.images.fixed_height_small.url,
        width: gif.images.fixed_height_small.width,
        height: gif.images.fixed_height_small.height,
      },
      fixed_height: {
        url: gif.images.fixed_height.url,
        width: gif.images.fixed_height.width,
        height: gif.images.fixed_height.height,
      },
      original: {
        url: gif.images.original.url,
        width: gif.images.original.width,
        height: gif.images.original.height,
      },
    },
    import_datetime: gif.import_datetime,
  }));

  return transformedData.sort((a, b) => {
    const dateA = new Date(a.import_datetime).getTime();
    const dateB = new Date(b.import_datetime).getTime();
    return dateB - dateA;
  });
};
