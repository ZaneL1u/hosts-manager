const hostReg =
  /^#*\s*[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?)\s+[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;

// 格式化hosts文件转数组
export const formatHosts = function (hosts: string) {
  return hosts
    .split("\n")
    .filter((item) => hostReg.test(item))
    .map((item) => {
      const [ip, host] = item
        .replace(/^#*/g, "")
        .trim()
        .split(" ")
        .filter((item) => item);
      return { ip, host, selected: item.indexOf("#") === -1 };
    });
};
