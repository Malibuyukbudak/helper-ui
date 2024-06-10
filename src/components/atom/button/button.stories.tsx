import { Button } from ".";

export default {
  title: "Components/Atom/Button",
  component: Button,
};

export function Text() {
  return <Button variant="text"> Text </Button>;
}

export function Outlined() {
  return <Button variant="outlined"> Outlined </Button>;
}
