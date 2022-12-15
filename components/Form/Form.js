import React, { useState } from "react";
import styled from "styled-components";

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import FormItem from "./FormItem";
import Button from "@material-ui/core/Button";
import useTrans from "../../pages/hooks/useTrans.js";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const StyledForm = styled.div`
  padding: 16px 0 48px;
  background-color: #fff;
  border-radius: 5px;

  .form {
    .item {
      display: flex;
      justify-content: center;
      padding: 8px 16px;
    }
    .action {
      display: flex;
      justify-content: center;

      .MuiButtonBase-root {
        border-radius: 20px;
        background-color: #ff4f00;
        width: 70%;
      }
    }
  }
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const trans = useTrans();

  const handleRegister = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
  }

  return (
    <StyledForm>
      <GridContainer className="form">
        <GridItem className="item" xs={12}>
          <FormItem
            label={trans.home.form.labelMail}
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </GridItem>
        <GridItem className="item" xs={12}>
          <FormItem
            label={trans.home.form.labelName}
            value={name}
            onChange={(value) => setName(value)}
          />
        </GridItem>
        <GridItem className="item" xs={12}>
          <FormItem
            label={trans.home.form.labelPhone}
            value={phone}
            onChange={(value) => setPhone(value)}
          />
        </GridItem>
        <GridItem className="item action" xs={12}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleRegister}
          >
            { trans.home.button.submit }
          </Button>
        </GridItem>
      </GridContainer>
    </StyledForm>
  )
}

export default Form;
