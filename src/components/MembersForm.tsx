import React, { FC } from 'react';
import {Form, Input} from "antd";
import {IMemberFormProps} from "../interfaces/memberFormProps";

const MembersForm: FC<IMemberFormProps> = ({ handleInputChange, personCount, persons }: IMemberFormProps) => {
  const personArray = Array.apply(null, Array(personCount));

  return (
    <Form style={{ maxWidth: 900 }}>
      <div className="row mb-2 justify-content-center">
        {personArray.map((value, index) => {
          return (
            <Form.Item key={index}>
              <Input
                className={'form-control'}
                placeholder={`Member ${index + 1}`}
                value={persons[index]}
                onChange={(e: any) => handleInputChange(index, e.target.value)}
              />
            </Form.Item>
          );
        })}
      </div>
    </Form>
  )
}

export default MembersForm;
