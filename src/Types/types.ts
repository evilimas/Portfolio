interface Steps {
  name: string;
  icon: string;
  href?: string;
  github?: string;
}

interface Benefits {
  name: string;
  description: string;
}

interface Tabs {
  name: string;
  link: string;
}

export type { Steps, Benefits, Tabs };
