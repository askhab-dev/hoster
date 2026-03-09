export interface BannerType {
  title: string;
  description: React.ReactNode;
  list?: string[];
  tags?: string[];
}

export interface BannerProps extends BannerType {
  className?: string;
}
