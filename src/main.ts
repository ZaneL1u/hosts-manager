import App from "./App.svelte";
// import "svelte-material-ui/bare.css";
import "./theme/smui.css";
// import "./theme/smui-dark.css";
import "@/components/Tailwind.svelte";

const app = new App({
  target: document.body,
});

export default app;
