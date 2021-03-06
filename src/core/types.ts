export interface AppData {
  footer: Footer;
}

export interface Footer {
  left: {
    icon?: string;
    value: string;
  };
  right: {
    icon?: string;
    value: string;
  };
  sections: {
    current: FooterSection;
    rotation: FooterSection[];
  };
}

export interface FooterSection {
  title: string;
  value: string;
}
