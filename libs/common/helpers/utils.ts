import _ from 'underscore';
import { DateSubDoc, Move, PeriodSubDoc } from '../../scheme';

const ARRAY_SPLIT_SYMBOL = '[].';
const POSITIONS_SPLIT_SYMBOL = ',';
export const getPropertyValue = (
  containerObject: any,
  path: any,
  defaultValueArg?: any,
) => {
  if (containerObject === undefined) {
    return undefined;
  }
  const defaultValue =
    typeof defaultValueArg !== 'undefined' ? defaultValueArg : null;

  try {
    return _(path.split('.')).reduce((obj, key) => {
      return obj[key];
    }, containerObject);
  } catch (e) {
    return defaultValue;
  }
};

export const getFromObjectByReference = (
  obj: any,
  reference: string,
  positions: string | null,
) => {
  if (positions === null || obj === undefined) {
    return getPropertyValue(obj, reference);
  }
  const splittedReference = reference.split(ARRAY_SPLIT_SYMBOL);
  const splittedPositions = positions.split(POSITIONS_SPLIT_SYMBOL);
  if (splittedReference.length !== splittedPositions.length + 1) {
    throw new Error(
      'Utils getFromObjectByReference wrong positions or reference length',
    );
  }
  return getElementForArraysInObject(obj, splittedReference, splittedPositions);
};
function getElementForArraysInObject(
  obj: any,
  splittedReference: string[],
  splittedPositions: string[],
) {
  const currentReference = splittedReference.shift();
  const currentResult = getPropertyValue(obj, currentReference);
  if (!splittedReference.length) {
    return currentResult;
  }
  const currentIndex = splittedPositions.shift();
  const nextObj =
    currentResult !== undefined ? currentResult[currentIndex] : undefined;
  return getElementForArraysInObject(
    nextObj,
    splittedReference,
    splittedPositions,
  );
}
export function findMoveByReference(moves: Move[], reference: string): Move {
  return moves.find(
    (move) => move.field_identity.field_reference === reference,
  );
}
export function filterMovesByReference(
  moves: Move[],
  reference: string,
): Move[] {
  return moves.filter(
    (move) => move.field_identity.field_reference === reference,
  );
}

export function firstStartsBefore(
  dateFirst: DateSubDoc,
  dateSecond: DateSubDoc,
) {
  return dateFirst.year === dateSecond.year
    ? biggerIfNotNull(dateFirst.month, dateSecond.month)
    : biggerIfNotNull(dateFirst.year, dateSecond.year);
}

export function biggerIfNotNull(firstElement: number, secondElement: number) {
  if (firstElement === null) {
    return false;
  }
  if (secondElement === null) {
    return true;
  }
  return firstElement < secondElement;
}
