import React from "react";
import { Button } from "react-bootstrap";

export interface IButton {
  value: string;
  action: () => {};
}

const ButtonComponent = (props: IButton) => {
  const { value, action } = props;
  const [ useAction, setAction ] = React.useState({});
  const onClick: any = () => {
    setAction(action());
  };
  return (
    <Button data-testid="button" variant="primary" onClick={onClick}>
      {value}
    </Button>
  );
};

export default ButtonComponent;
