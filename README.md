This is a JavaScript task.
File structure is set up and don't need to be touched. By loading index.html directly in the browser you can see if your results are correct.
You only need to work in main.js file, inside of the function outputDate();

Please set up timer. And afterwards specify how much time it took you to finish the task.

After the tasks are finished, create either gist on github of main.js and send the link or archive all files and send them back to us.

### Explanation of code from John

This was a good test for javascript, now I appreciate `moment()` even more :D !

## Issues faced and fixed

1. To measure time between two dates we need to change the date format into a timestamp `new Date()` and then use `getTime()` to get the data as a string of milliseconds.

2. The first problem I had was `new Date()` did not work for the euro format of DD.MM.YYYY, so I had to change to MM.DD.YYYY, `convertEUDateToUSFormat()`.

3. Once we got the milliseconds its was fairly easy to get the `days`, then figure out the `years`, and `months`.

4. The tricky part was with the months, only showing months if more than 12, then figure out how many months minus the years, eg if we have `15 months` we need to show `1 year and 3 months`

5. Once I got the `endString` printing out the correct string, I saw the `outputDate()` function was iterating for each `dates` index, so I used `dates` as an argument to my main function `convertEUDateToUSFormat` and boom it works.

6. I had and issue with checking minus numbers in a condition of `if number <= 0 `, so I created a test file `test.js` to help me debug this.

## Time spent

A little over 2 hours, 2hrs 30 mins.

## End note

I really enjoyed talking with Andrius Petkus and hearing chiliz plans, I enjoyed researching what you do and hit a pleasure spot when I saw you deal with sport technology, mostly football, but I enjoy most sports. Already it looks impressive and your scope for growth looks positive. I love the fact you deal with crypto currency, `Etherium`, if I'm not mistaken?, and would love to be part of team building a product that uses ths modern mindset.

I hope to get some feedback on my test.

Regards John Moran.
