import axios from "axios";

const photosAPI = 'https://picsum.photos/v2/list?limit=9'; 

export async function fetchPhotos(): Promise<string[]> {
  const response = await axios.get(photosAPI);
  return response.data.map((photo: any) => photo.download_url);
}
