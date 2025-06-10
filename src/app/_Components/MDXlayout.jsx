import { MDXProvider } from "@mdx-js/react";

export default function MDXLayout({ children }) {
  return (
    <MDXProvider>
      <div className="prose mx-auto mt-10">{children}</div>
    </MDXProvider>
  );
}
