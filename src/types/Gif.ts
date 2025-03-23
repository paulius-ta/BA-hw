export interface GifImage {
  url: string;
  width: string;
  height: string;
}

export interface GifImages {
  fixed_height: GifImage;
  fixed_height_small: GifImage;
  original: GifImage;
}

export interface Gif {
  id: string;
  title: string;
  images: GifImages;
  import_datetime: string;
}

export interface GifResponse {
  data: Gif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}
