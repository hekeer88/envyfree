import {ICreditCalculationParams} from "../interfaces/creditCalculation";
import {useEffect, useState} from "react";
import AssignCredit from "../services/creditCalculator";

export const useCreditCalculation = () => {
  const [result, setResult] = useState<number[]>(Array.from({ length: 3 }));
  const [isValidResult, setIsValidResult] = useState(false);

  const [personCount, setPersonCount] = useState(3);
  const initialFieldValues = Array.from({ length: personCount }, () =>
    Array(personCount).fill(0)
  );
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const initialMemberValues = Array(personCount).fill('');
  const [personValues, setPersonValues] = useState(initialMemberValues);

  useEffect(() => {
    setFieldValues(Array.from({ length: personCount }, () => Array(personCount).fill(0)));
  }, [personCount]);

  const handleInputChange = (row: number, col: number, value: number) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[row][col] = value;

    setFieldValues(newFieldValues);

    calculateAssignCredit({ personCount: personCount, contributions: newFieldValues });
  }

  const onChangeMemberCountValue = (e: any) => setPersonCount(Number(e.target.value))
  const onChangeMemberValue = ((index: number, value: string) => {
    const newPersonValues = [...personValues];
    newPersonValues[index] = value;
    setPersonValues(newPersonValues);
  });

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

  const clearValues = () => {
    setFieldValues(Array.from({ length: personCount }, () => Array(personCount).fill(0)));
    calculateAssignCredit({ personCount: personCount, contributions: fieldValues });
    setResult(Array.from({ length: 3 }));
  };

  return {
    calculateAssignCredit,
    result,
    isValidResult,
    fieldValues,
    handleInputChange,
    personCount,
    onChangeMemberCountValue,
    personValues,
    onChangeMemberValue,
    clearValues
  };
}
