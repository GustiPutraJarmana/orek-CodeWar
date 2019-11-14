// Bingo game
function bingo(a) {
    var b = [2, 9, 14, 7, 15];
    var c = [0, 0, 0, 0, 0];
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < b.length; j++) {
        if (a[i] == b[j]) c[j] += 1;
      }
    }
    for (var i = 0; i < c.length; i++) {
      if (c[i] === 0) return "LOSE";
    }
    return "WIN";
  }
  console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
  console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");
  
  // count Black Friday in the Year
  function unluckyDays(year) {
    var count = 0;
    for (var month = 0; month < 12; month++) {
      var date = new Date(year, month, 13);
      if (date.getDay() == 5) count++;
    }
    return count;
  }
  console.log(unluckyDays(2019), 1, "should be: 1");
  console.log(unluckyDays(1001), 3, "should be: 3");
  console.log(unluckyDays(2819), 2, "should be: 2");
  console.log(unluckyDays(2792), 2, "should be: 2");
  console.log(unluckyDays(2723), 2, "should be: 2");
  console.log(unluckyDays(1909), 1, "should be: 1");
  console.log(unluckyDays(1812), 2, "should be: 2");
  console.log(unluckyDays(1618), 2, "should be: 2");
  console.log(unluckyDays(2132), 1, "should be: 1");
  console.log(unluckyDays(2065), 3, "should be: 3");
  
  const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    var count = 0;
    var arr = [];
    for (var i = begin; i <= end; i++) {
      arr.push(i);
    }
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i] - arr[0]) % step === 0) count += arr[i];
    }
    return count;
  };
  console.log(sequenceSum(2, 6, 2), 12);
  console.log(sequenceSum(1, 5, 1), 15);
  console.log(sequenceSum(1, 5, 3), 5);
  
  
  //Piramida//Penting
  function rowSumOddNumbers(n) {
    var sum = 0;
    var odd = 1;
    var temp = [];
    for (var i = 0; i < n; i++) {
      temp[i] = [];
      for (var j = 0; j <= i; j++) {
        temp[i][j] = odd;
        odd += 2;
      }
    }
    for (var i = 0; i < temp[n - 1].length; i++) {
      sum += temp[n - 1][i];
    }
    return sum;
  }
  // console.log(rowSumOddNumbers(1), 1);
  console.log(rowSumOddNumbers(42), 74088);
  
  function menFromBoys(arr) {
    //your code here
    for (var i = 0; i < arr.length; ) {
      if (arr[i + 1] < arr[i]) {
        var tampung = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tampung;
        i = Math.max(0, i - 1);
      } else {
        i++;
      }
    }
  
    var result = [];
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) result.push(arr[i]);
      else odd.push(arr[i]);
    }
    for (var i = 0; i < odd.length; ) {
      if (odd[i + 1] > odd[i]) {
        var tampung = odd[i];
        odd[i] = odd[i + 1];
        odd[i + 1] = tampung;
        i = Math.max(0, i - 1);
      } else {
        i++;
      }
    }
    for (var i = 0; i < odd.length; i++) {
      result.push(odd[i]);
    }
    var output = [];
    var flag = true;
    for (var i = 0; i < result.length; i++) {
      for (var j = i + 1; j < result.length; j++) {
        if (result[i] == result[j]) {
          delete result[j];
        }
      }
  
      if (result[i] === true && 0 === true) flag = true;
      output.push(result[i]);
    }
    var a = [];
    for (var i = 0; i < output.length; i++) {
      if (output[i] !== undefined) a.push(output[i]);
    }
    return a;
  }
  console.log(
    menFromBoys([
      -91,
      3,
      743,
      499,
      89,
      2,
      -65,
      0,
      -360,
      -537,
      8,
      106,
      95,
      -540,
      -992,
      878,
      -852,
      76,
      523
    ])
  );
  
  console.log(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
  console.log(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
  console.log(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);
  console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [
    72,
    76,
    82,
    100,
    91,
    85
  ]);
  console.log(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41]);
  console.log(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71]);
  console.log(menFromBoys([-94, -99, -100, -99, -96, -99]), [
    -100,
    -96,
    -94,
    -99
  ]);
  console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14]), [
    -26,
    -14,
    -27,
    -49,
    -51,
    -53
  ]);
  console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]), [
    -86,
    -56,
    -30,
    -15,
    -17,
    -33,
    -45,
    -85
  ]);
  console.log(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89]);
  console.log(menFromBoys([2, -43, 95, -90, 37]), [-90, 2, 95, 37, -43]);
  console.log(menFromBoys([82, -61, -87, -12, 21, 1]), [
    -12,
    82,
    21,
    1,
    -61,
    -87
  ]);
  console.log(menFromBoys([63, -57, 76, -85, 88, 2, -28]), [
    -28,
    2,
    76,
    88,
    63,
    -57,
    -85
  ]);
  console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]), [
    -282,
    818,
    900,
    928,
    281,
    49,
    -1
  ]);
  
  function sortGiftCode(code) {
    //TODO
    var arr = []
    var result = ''
    for (var i = 0; i < code.length; i++) {
      arr.push(code[i])
    }
    arr.sort(function (a, b) {
    return a.localeCompare(b);
    });
    for (var i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result
  }
  console.log(sortGiftCode("abcdef"), "abcdef");
  console.log(sortGiftCode("pqksuvy"), "kpqsuvy");
  console.log(
    sortGiftCode("zyxwvutsrqponmlkjihgfedcba"),
    "abcdefghijklmnopqrstuvwxyz"
  );
  
  function* take(length, iterable) {
    for (let x of iterable) {
      if (length <= 0) return;
      length--;
      yield x;
    }
  }
  
  function* primes() {
    let n = 2;
  
    while (true) {
      if (isPrime(n)) yield n;
      n++;
    }
  
    function isPrime(num) {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  function firstNonRepeated(s) {
    // your code here
    for (var i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) return s[i]
    }
    return null
  }
  console.log(firstNonRepeated("test"), "e");
  console.log(firstNonRepeated("abcdefghijklmnopqrstuvwya"), "r");
  console.log(firstNonRepeated("1122321235121222"), "5");
  console.log(firstNonRepeated("rend"), "r");
  
  function findShort(s) {
    var a = [];
    var b = [];
    for (var i = 0; i < s.length; i++) {
      if (s[i] === " ") {
        a.push(b);
        b = [];
      } else {
        b.push(s[i]);
      }
    }
    a.push(b);
    var c = [];
    for (var i = 0; i < a.length; i++) {
      c.push(a[i].length);
    }
    for (var i = 0; i < c.length; ) {
      if (c[i + 1] < c[i]) {
        var tampung = c[i];
        c[i] = c[i + 1];
        c[i + 1] = tampung;
        i = Math.max(0, i - 1);
      } else {
        i++;
      }
    }
    return c[0];
  }
  
  function wordsToMarks(string) {
    //your code here
    var alphabeth = "0abcdefghijklmnopqrstuvwxyz";
    var result = 0;
    for (var i = 0; i < string.length; i++) {
      for (var j = 0; j < alphabeth.length; j++) {
        if (string[i] === alphabeth[j])
        result += alphabeth.indexOf(alphabeth[j])
      }
    }
    return result
  }
  console.log(wordsToMarks("attitude"), 100);
  console.log(wordsToMarks("friends"), 75);
  console.log(wordsToMarks("family"), 66);
  console.log(wordsToMarks("selfness"), 99);
  console.log(wordsToMarks("knowledge"), 96);
  var isSquare = function(n) {
    var result = true
    if (n < 0) {
      return false;
    }
    if (Math.sqrt(n) % 1 === 0) {
      result = true;
    } else {
      result = false
    }
    return result
  };
  console.log(isSquare(39), true, "0 is a square number (0 * 0)");
  console.log(isSquare(3), false, "3 is not a square number");
  console.log(isSquare(4), true, "4 is a square number (2 * 2)");
  console.log(isSquare(25), true, "25 is a square number (5 * 5)");
  console.log(isSquare(26), false, "26 is not a square number");
  
  function minMax(arr) {
    for (var i = 0; i < arr.length; ) {
      if (arr[i + 1] < arr[i]) {
        var tampung = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tampung;
        i = Math.max(0, i - 1);
      } else {
        i++;
      }
    }
    return [arr[0], arr[arr.length - 1]];
  }
  
  console.log(minMax([1, 2, 3, 4, 5])); //[1, 5]
  console.log(minMax([2334454, 5])); //[5, 2334454]
  console.log(minMax([1])); //[1, 1]
  
  
  function numericals(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
      console.log(i);
  
      console.log(s.lastIndexOf(s[i]));
      console.log(s.indexOf(s[i]));
  
      if (s.indexOf(s[i]) - s.lastIndexOf(s[i]) === 0) {
        result += 1;
      } else {
        result += 1++;
      }
    }
  
    return result;
  }
  console.log(numericals("Hello, World!"), "1112111121311");
  console.log(numericals("Hello, World! It's me, JomoPipi!"), "11121111213112111131224132411122");
  console.log(numericals("hello hello"), "11121122342");
  console.log(numericals("Hello"), "11121");
  console.log(numericals("aaaaaaaaaaaa"),"123456789101112");
  
  PENTING BANGET
  function partsSums(ls) {
    var result = [];
    var a = 0;
    console.log(ls.length);
  
    for (var i = 0 ; i < ls.length; i++) {
      console.log(i);
  
      console.log(ls[i]);
      a += ls[i];
  
      result[i] = a
      console.log(result[i]);
  
    }
    console.log(result);
  }
  
  function partsSums(ls) {
    var result = [];
    var a = 0;
    console.log(ls.length);
  
    for (var i = ls.length -1 ; i >= 0; i--) {
      console.log(i);
  
      console.log(ls[i]);
      a += ls[i];
      result[i] = a
      console.log(result[i]);
  
    }
    console.log(result);
  }
  console.log(partsSums([])); //, [0]
  
  function highestRank(arr) {
    //Your Code logic should written here
    var max = 0;
    var count = 0;
    var result;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
  
        if (count > max) {
          max = count;
          result = arr[j];
        }
      }
      console.log(count);
      count = 0;
    }
    console.log(count);
  
    return result;
  }
  console.log(highestRank([12, 10, 8, 8, 12]));
  function well(x) {
    var result = 0;
    var a = "";
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < x[i].length; j++) {
        var b = x[i][j].toString().toLowerCase()
        console.log(b);
        if(b=== 'good') result++
      }
    }
    if (result > 2) {
      return "I smell a series!";
    } else if (result < 1) {
      return "Fail!";
    } else {
      return "Publish!";
    }
  }
  console.log(
    well([
      ["bad", "bAd", "bad"],
      ["bad", "bAd", "bad"],
      ["bad", "bAd", "bad"]
    ]),
    "Fail!"
  );
  console.log(
    well([
      ["gOOd", "bad", "BAD", "bad", "bad"],
      ["bad", "bAd", "bad"],
      ["GOOD", "bad", "bad", "bAd"]
    ]),
    "Publish!"
  );
  console.log(
    well([
      ["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"],
      ["bad"],
      ["gOOd", "BAD"]
    ]),
    "I smell a series!"
  );
  