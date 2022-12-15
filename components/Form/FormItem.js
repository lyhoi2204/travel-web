import React from "react";
import styled from "styled-components";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Input } from "@material-ui/core";


const StyledFormItem = styled(FormControl)`
  width: 70%;
`;

const FormItem = ({ label, value, onChange }) => {

  return (
    <StyledFormItem>
      <InputLabel id="demo-simple-select-label">{ label }</InputLabel>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </StyledFormItem>
  )
}

export default FormItem;
