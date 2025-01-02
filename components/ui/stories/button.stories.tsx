import React from 'react';
import { Button } from '../button'

const ButtonStories = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    children: {
      control: 'text',
    },
  },
};

export default ButtonStories;

export const Playground = {
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
  }
};

export const VariantsAndSizes = () => {
  const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
  const sizes = ['default', 'sm', 'lg', 'icon'] as const;

  return (
    <div className="space-y-4">
      {variants.map((variant) => (
        <div key={variant}>
          <h3 className="text-lg font-medium mb-2">{variant.charAt(0).
            toUpperCase() + variant.slice(1)}</h3>
          <div className="flex items-center gap-4">
            {sizes.map((size) => (
              <Button key={`${variant}-${size}`} variant={variant} size={size}>
                {size === 'icon' ? <span>🔘</span> : `${variant} - ${size}`}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

VariantsAndSizes.parameters = {
  controls: { disable: true },
};
