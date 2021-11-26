import * as React from "react";
import type { Theme } from "~/theme";

type PreviewProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  theme: Theme;
};

const Preview = React.forwardRef<HTMLInputElement, PreviewProps>(
  ({ label, theme, ...rest }, ref) => {
    return (
      <label className="flex flex-col gap-y-4 items-center">
        <input {...rest} className="sr-only" type="radio" ref={ref} />
        <div className="selection-highlight w-full">
          {Object.values(theme).map((color) => (
            <div
              key={color}
              className="h-6"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        {label}
      </label>
    );
  }
);

export default Preview;
