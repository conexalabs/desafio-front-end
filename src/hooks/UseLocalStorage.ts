import { useState, useEffect, useMemo } from "react";
import hexString from "../utils/hexString";
import safeBase64 from "../utils/safeBase64";

const { encode, decode } = safeBase64;

export default function <T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const hexKey = useMemo(() => hexString.create(key), [key]);

  const [value, setValue] = useState<T>(() => {
    let parsedValue = defaultValue;
    if (hexKey?.length > 0) {
      const rawValue = localStorage.getItem(hexKey);
      if (rawValue && rawValue.length > 0) {
        try {
          parsedValue = JSON.parse(decode(rawValue));
        } catch (err) {
          parsedValue = defaultValue;
        }
      }
    }
    return parsedValue;
  });

  useEffect(() => {
    const jsonString = JSON.stringify(value);
    localStorage.setItem(hexKey, encode(jsonString));
  }, [value, hexKey]);

  return [value, setValue];
}