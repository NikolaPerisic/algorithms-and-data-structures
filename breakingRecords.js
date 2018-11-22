/*
Maria plays college basketball and wants to go pro. Each season she 
maintains a record of her play. She tabulates the number of times she 
breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, 
and she begins counting from there. Given Maria's scores for a season, 
int arr 'scores', find and print the number of times she breaks her 
records for most and least points scored during the season.
*/

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let most = scores[0];
    let least = scores[0];
    let output = [0, 0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > most) {
            output[0]++;
            most = scores[i];
        } else if (scores[i] < least) {
            output[1]++;
            least = scores[i];
        }
    }
    return output;
}
console.log(breakingRecords([10, 5, 20, 2, 4, 5, 2, 25, 1]));
