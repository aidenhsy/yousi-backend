const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// @desc    Fetch all daily sales record from a single store
// @route   Post /api/storesales
// @access  Private
const getDailySales = async (req, res) => {
  try {
    const res_token = await axios.post(
      `https://cysms.wuuxiang.com/api/auth/accesstoken?appid=${process.env.TCSL_APPID}&accessid=${process.env.TCSL_ACCESSID}&response_type=token`
    );
    const token = res_token.data.access_token;

    var list = [];
    var pageTotal = true;
    var pageNo = 1;

    while (pageTotal) {
      var salesData = await axios.post(
        `https://cysms.wuuxiang.com/api/datatransfer/getserialdata?centerId=${process.env.TCSL_CENTERID}&settleDate=2022-09-30&pageNo=${pageNo}&pageSize=20&shopId=124524`,
        {},
        {
          headers: {
            access_token: `${token}`,
            accessid: `${process.env.TCSL_ACCESSID}`,
            granttype: "client",
          },
        }
      );
      var data = salesData.data.data.billList.map((bill) => {
        return bill.item.map((item) => {
          return item.item_name;
        });
      });
      list.push(data);
      if (salesData.data.data.pageInfo.pageTotal !== pageNo) {
        pageNo += 1;
      } else {
        pageTotal = false;
      }
    }
    var listItems = [].concat.apply([], list);
    var listItems1 = [].concat.apply([], listItems);

    const counts = {};
    for (const num of listItems1) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    var arr = Object.keys(counts).map((key) => {
      return { [key]: counts[`${key}`] };
    });

    arr.sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0];
    });
    res.json(arr);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDailySales };
