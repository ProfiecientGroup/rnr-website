export interface BlogsType {
  name: string;
}
export interface FAQ {
  title: string;
  description: string;
  faqs?: FAQS[];
}
export interface FAQS {
  question: string;
  answer: string;
  data?: Data[];
}

export interface Data {
  type: string;
  title: string;
  content: string;
}
