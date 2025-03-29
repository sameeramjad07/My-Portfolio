import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {2025}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/sameeramjad07">Sameer Amjad</a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
