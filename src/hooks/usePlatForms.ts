import useData from "./useData";

export interface PlatForm {
  id: number;
  name: string;
  image_background: string;
}

const usePlatForms = () => useData<PlatForm>("/platforms/lists/parents");
export default usePlatForms;
