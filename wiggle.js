/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const len = nums.length

  for (let j = 0; j < len - 1; j++) {
    for (let i = 0; i < len - 1; i++) {
      let high = len - 1,
        first = i,
        second = i + 1
      if (i % 2 === 0) {
        // second 가 더 커야함
        if (nums[first] > nums[second]) {
          // swap
          swap(nums, first, second)
        } else if (nums[first] === nums[second]) {
          // second보다 큰 high를 찾아서 swap
          while (nums[high] <= nums[second]) {
            high--
          }
          console.log("high", high, first, second)
          // high값과 second값을 swap
          swap(nums, high, second)
        }
      } else {
        // first가 더 커야함
        if (nums[first] < nums[second]) {
          swap(nums, first, second)
        } else if (nums[first] === nums[second]) {
          // second보다 작은 high를 찾아서 swap
          while (nums[high] >= nums[second]) {
            high--
          }
          console.log("홀수 high", j, " - ", nums[high], nums[first], nums[second])
          // high값과 second값을 swap
          swap(nums, high, second)
        }
      }
    }
    console.log(j, "후의 nums : ", nums)
  }
  console.log(nums)
}

const swap = (nums, first, second) => {
  const temp = nums[first]
  nums[first] = nums[second]
  nums[second] = temp
}

wiggleSort([2, 3, 3, 2, 2, 2, 1, 1])

// [2,3,2,3,1,2,1,2]
// [ 2, 3, 1, 2, 2, 2, 1, 3]
