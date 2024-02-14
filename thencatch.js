/*
setTimeout ფუნქცია იყენებს callback-ს,
დაწერეთ მისი promise-ზე დადაფუძნებული
ალტერნატივა
*/
/*
გამოიყენე პირველ დავალებაში შექმნილი
ფუნქცია, რათა განავრცო ჩვენს მიერ
დაწერილი “Toy Shop” შემდეგი პირობის
იმპლემენტაციით:
➔ სათამაშოს დამზადებას სჭირდება
დაახლოებით 3 წამი. (დროის მითითება
შესაძლებელი უნდა იყოს დინამიურად)
➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც
დავარქმევთ პირობითად, “deliverToys”,
რომლის დაყოვნებაც 2 წამია
(გადაეცემა დინამიურად)
➔ სათამაშოს გაყიდვას სჭირდება 1 წამი
(დინამიურად)
● ყოველი მომდევნო ნაბიჯი უნდა
ელოდებოდეს წინა ნაბიჯის რეზულტატს და
შესაბამისად წყვეტდეს მოხდება თუ არა
მისი შესრულება
● გამოიყენე .then().catch() და async/await
● სინტაქსები. (2 ვარიანტი)
*/

// THEN / CATCH

const timeout = (milliseconds) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    } catch (err) {
      reject(err);
    }
  });
};


const makeToys = () => {
  return new Promise((resolve, reject) => {
    if (Math.floor(Math.random() * 10) + 1 > 2) {
      resolve("undefected");
    } else {
      reject("defected");
    }
  });
};

const sellToys = (status) => {
  return new Promise((resolve, reject) => {
    if (status === "undefected") {
      if (Math.floor(Math.random() * 10) + 1 > 4) {
        resolve("Toy has been Sold");
      } else {
        reject("Toy has not been sold");
      }
    }
  });
};

const deliverToys = (saleStatus) => {
  return new Promise((resolve, reject) => {
    if (saleStatus === "Toy has been Sold") {
      if (Math.floor(Math.random() * 10) + 1 > 4) {
        resolve("Toy has been delivered");
      } else {
        reject("Toy has not been delivered");
      }
    }
  });
};

const toyStore = () => timeout(3000);
makeToys()
  .then((status) => {
    return timeout(1000).then(() => sellToys(status));
  })
  .then((saleStatus) => {
    return timeout(2000).then(() => deliverToys(saleStatus));
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

toyStore();

  