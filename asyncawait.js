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

// ASYNC / AWAIT

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


  const makeToys = async () => {
    if (Math.floor(Math.random() * 10) + 1 > 2) {
      return "undefected";
    } else {
      return "defected";
    }
  };
  
  const sellToys = async (status) => {
    if (status === "undefected") {
      if (Math.floor(Math.random() * 10) + 1 > 4) {
        return "Toy has been Sold";
      } else {
        return "Toy has not been sold";
      }
    } else {
      return "Toy has been defected";
    }
  };
  
  const deliverToys = async (saleStatus) => {
    if (saleStatus === "Toy has been Sold") {
      if (Math.floor(Math.random() * 10) + 1 > 4) {
        return "Toy has been delivered";
      } else {
        return "Toy has not been delivered";
      }
    } else{
      return "Toy has been defected and has not been sold"
    }
  };
  
  const toyStore = async () => {
    try {
      const status = await makeToys();
      await timeout(3000);
      const saleStatus = await sellToys(status);
      await timeout(1000);
      const res = await deliverToys(saleStatus);
      await timeout(2000);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  
  toyStore();