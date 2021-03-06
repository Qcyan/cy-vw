const hash = require('hash-sum')
const path = require('path');

const time = new Date().getTime();
//版本号hash
const versionHash = hash(time);

function resolve(dir) {
  return path.join(__dirname, dir);
}

const programPath = `../../../../lifest`;

//合并两个配置
module.exports =  {
  //webpack config extend public webpack config
  configureWebpack: {
    resolve: {
      alias: {
        //@开头的为项目的别名路径
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/index.scss";`
      }
    }
  },
  pwa: {
    assetsVersion: hash(time)
  },
  devServer: {
    //根据环境配置相关代理
    open: true,
    proxy: {
      '/': {
        ws: false,      //避免把hot代理了
        // target: 'https://beta.jiaxiao.dtb315.cn',
        // //代理登录状态cookie  b72b76241459936962c978f326f7463b=%25B1%25CE%25B0h%25B1t%25BF%25AF; PHPSESSID=jufd4c7q7qakvp21u9ccff7ai2; 9de70f6546b2452f6e7b98b46ac36070=dab6004fafa62b0f88cce54b52f0aa14; Hm_lvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1554945590,1556070923; Hm_lpvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1556070923; come_from=1; prev_page=aHR0cHM6Ly9iZXRhLmR0YjMxNS5jbi9tZW1iZXI%3D; visit_page=aHR0cDovL2JldGEuZHRiMzE1LmNuL21lbWJlci9tZW1iZXIvY29tbW9u
        // onProxyReq(proxyReq, req, res) {
        //   proxyReq.setHeader('cookie',`9de70f6546b2452f6e7b98b46ac36070=89e2f225b8b16b40971f301cb2287d37; Hm_lvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1555499206,1555558090,1555558091,1555568044; b72b76241459936962c978f326f7463b=%257D%25CF%25AA%25AE%25B0%258Cy%25AF; PHPSESSID=io00ctb4mlguffs13q9kp1c4m7; Hm_lpvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1555570673; come_from=1; prev_page=aHR0cHM6Ly9wYy5kdGIzMTUuY24vbWVtYmVy; visit_page=aHR0cDovL3BjLmR0YjMxNS5jbi9tZW1iZXIvbWVtYmVyL2NvbW1vbg%3D%3D`);
        // }

        target: 'https://pc.lifest.dtb315.cn',
        //代理登录状态cookie  9de70f6546b2452f6e7b98b46ac36070=89e2f225b8b16b40971f301cb2287d37; Hm_lvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1555499206,1555558090,1555558091,1555568044; b72b76241459936962c978f326f7463b=%257D%25CF%25AA%25AE%25B0%258Cy%25AF; PHPSESSID=io00ctb4mlguffs13q9kp1c4m7; Hm_lpvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1555570673; come_from=1; prev_page=aHR0cHM6Ly9wYy5kdGIzMTUuY24vbWVtYmVy; visit_page=aHR0cDovL3BjLmR0YjMxNS5jbi9tZW1iZXIvbWVtYmVyL2NvbW1vbg%3D%3D


        onProxyReq(proxyReq, req, res) {
          proxyReq.setHeader('cookie', `PHPSESSID=6ld72fok035u3vka0vkoau12j2; 9de70f6546b2452f6e7b98b46ac36070=cdfa0e8343a090a7d662ef745de1e6be; Hm_lvt_bdb7f9abf5cdbcb7d50419d7c6bd1be5=1563416410,1563500619,1563786055,1563931854; Hm_lpvt_bdb7f9abf5cdbcb7d50419d7c6bd1be5=1563931854; Hm_lvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1563759908,1563786055,1563789180,1563931854; b72b76241459936962c978f326f7463b=%257D%25CF%25C8i%25B1%257C%2591g; Hm_lpvt_26e7ebdd6d0690ee128988fb6ebcdd4a=1563960514; come_from=1; prev_page=aHR0cHM6Ly9wYy5kdGIzMTUuY24vbWVtYmVyL2luZGV4Lmh0bWw%2FYm90dG9tPTEmdHlwZT1tZW1jYWNoZQ%3D%3D; visit_page=aHR0cDovL3BjLmR0YjMxNS5jbi9tZW1iZXIvaW5kZXgvYWxyZWFkeV9rbm93Lmh0bWw%2FdmVyc2lvbj0x`);
        }
      }
    }
  },
  outputDir: `${programPath}`,
  indexPath: `./app/home/view/index/index.html`,
  assetsDir: `static/${versionHash}`
};