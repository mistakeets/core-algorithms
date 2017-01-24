export default function fibonacci(n) {
  const fibStart = [0,1]
  if (n <= 1){
    return n
  } else {
    function fibBuild(arr, num){
      if (arr.length === num){
        return arr
      } else {
        return fibBuild(arr.concat([arr[arr.length - 1]+ arr[arr.length-2]]), num)
      }
    } return fibBuild(fibStart, n)
  }
}
