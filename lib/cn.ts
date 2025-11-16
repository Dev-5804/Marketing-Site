type ClassValue = string | number | undefined | null | false;

type ClassInput = ClassValue | ClassValue[];

const flatten = (input: ClassInput): ClassValue[] => {
  if (Array.isArray(input)) {
    return input.flatMap((item) => flatten(item));
  }
  return [input];
};

export const cn = (...classes: ClassInput[]): string =>
  classes
    .flatMap((entry) => flatten(entry))
    .filter((value): value is string | number => Boolean(value))
    .join(" ");
