interface catImage {
  src: string;
  width: number;
  height: number;
}

export interface Cat {
  id: string;
  name: string;
  path: string;
  img: catImage;
}
