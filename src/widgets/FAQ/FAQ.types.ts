export interface FAQItem {
  id: number
  question: string
  answer: string
}

export type FAQProps = {
  title: string;
  list: FAQItem[];
}
