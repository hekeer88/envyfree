import {ICreditCalculationParams} from "../interfaces/creditCalculation";
import {useEffect, useState} from "react";
import AssignCredit from "../services/creditCalculator";

export const useCreditCalculation = () => {
  const [result, setResult] = useState<number[]>(Array.from({ length: 3 }));
  const [isValidResult, setIsValidResult] = useState(false);

  const [sliderValue, setSliderValue] = useState(3);
  const initialFieldValues = Array.from({ length: sliderValue }, () =>
    Array(sliderValue).fill(0)
  );
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  useEffect(() => {
    setFieldValues(Array.from({ length: sliderValue }, () => Array(sliderValue).fill(0)));
  }, [sliderValue]);

  const handleInputChange = (row: number, col: number, value: number) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[row][col] = value;

    setFieldValues(newFieldValues);

    calculateAssignCredit({ personCount: sliderValue, contributions: newFieldValues });
  }

  const onChangeValue = (e: any) => setSliderValue(Number(e.target.value))

  const calculateAssignCredit = (params: ICreditCalculationParams): void => {
    const { personCount, contributions } = params;

    try {
      const normalizedCredits = AssignCredit.calculate(personCount, contributions);
      setIsValidResult(true);
      setResult(normalizedCredits);
    } catch (err) {
      setIsValidResult(false);
    }
  };

  return {
    calculateAssignCredit,
    result,
    isValidResult,
    fieldValues,
    handleInputChange,
    sliderValue,
    onChangeValue
  };
}
