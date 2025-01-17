// Task 1 //

function parseCount(number) {
  let parse = Number.parseFloat(number);
  if (Number.isNaN(parse)) {
    throw new Error("���������� ��������");
  } else {
    return parse;
  }
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

// Task 2 //

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
      throw new Error("����������� � ������ ��������� �� ����������");
    }
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  getArea() {
    let semiPerimetr = this.getPerimeter() / 2;
    let area = Math.sqrt(semiPerimetr * (semiPerimetr - this.sideA) * (semiPerimetr - this.sideB) * (semiPerimetr - this.sideC));
    return +area.toFixed(3);
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (error) {
    let triangle = {
      getArea() {
        return '������! ����������� �� ����������';
      },
      getPerimeter() {
        return '������! ����������� �� ����������';
      }
    };
    return triangle;
  }
}