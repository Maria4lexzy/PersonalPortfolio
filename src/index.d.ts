declare module 'photoswipe';
declare module 'photoswipe/lightbox';
declare module '@components/Typography/LinkCode.astro' {
  export default function LinkCode(props: LinkCodeProps): any;
}
declare global {
  interface Window {
    example: string;
  }
}
