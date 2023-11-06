import React, { FC } from 'react';
import {Form, Input} from "antd";
import {useCreditCalculationForm} from "../hooks/useCreditCalculationForm";
import {ICreditCalculationFormProps} from "../interfaces/creditCalculationFormProps";

const CreditCalculationForm: FC<ICreditCalculationFormProps> = ({ handleInputChange, fieldValues }: ICreditCalculationFormProps) => {
  const { isRowValid, columnsPerRow } = useCreditCalculationForm()

  return (
    <Form style={{ maxWidth: 900 }}>
      {fieldValues.map((rowValues, rowIndex) => {
        const colSize = Math.floor(columnsPerRow / rowValues.length)
        const colClass = `col-${colSize > 0 ? colSize : 1}` // Ensure there's at least col-1

        return (
          <div key={`row-${rowIndex}`} className="row mb-2 justify-content-center">
            {rowValues.map((value, colIndex) => {
              const isValidRow = isRowValid(rowValues);
              return (
                <Form.Item key={`col-${rowIndex}-${colIndex}`} className={colClass}>
                  <Input
                    type="{number}"
                    className={`form-control ${isValidRow ? 'is-valid' : 'is-invalid'}`}
                    placeholder={`Field ${colIndex + 1}`}
                    value={value}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, Number(e.target.value))}
                  />
                </Form.Item>
              );
            })}
          </div>
        )
      })
      }
    </Form>
  )
}

export default CreditCalculationForm;
