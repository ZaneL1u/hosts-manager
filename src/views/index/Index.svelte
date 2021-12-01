<script lang="ts">
  let hosts = `
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host
#      localhost
#	127.0.0.1              www.baidu.com
192.120.28.10 cmp.cmphicloud.com
192.120.28.13 csmp.qihoocloudsec.com
192.120.28.12 mssp.dbappsecurity.com.cn
127.0.0.1 dev.wepick.net.cn

# GitHub520 Host Start
140.82.114.26                 alive.github.com
140.82.114.26                 live.github.com
185.199.108.154               github.githubassets.com
140.82.113.22                 central.github.com
185.199.108.133               desktop.githubusercontent.com
185.199.108.153               assets-cdn.github.com
185.199.108.133               camo.githubusercontent.com
185.199.108.133               github.map.fastly.net
199.232.69.194                github.global.ssl.fastly.net
140.82.113.3                  gist.github.com
185.199.111.153               github.io
140.82.114.4                  github.com
192.0.66.2                    github.blog
140.82.112.6                  api.github.com
185.199.108.133               raw.githubusercontent.com
185.199.108.133               user-images.githubusercontent.com
185.199.108.133               favicons.githubusercontent.com
185.199.108.133               avatars5.githubusercontent.com
185.199.108.133               avatars4.githubusercontent.com
185.199.108.133               avatars3.githubusercontent.com
185.199.108.133               avatars2.githubusercontent.com
185.199.108.133               avatars1.githubusercontent.com
185.199.108.133               avatars0.githubusercontent.com
185.199.108.133               avatars.githubusercontent.com
140.82.112.10                 codeload.github.com
52.217.107.220                github-cloud.s3.amazonaws.com
52.216.249.140                github-com.s3.amazonaws.com
52.217.37.220                 github-production-release-asset-2e65be.s3.amazonaws.com
52.216.142.228                github-production-user-asset-6210df.s3.amazonaws.com
52.217.81.148                 github-production-repository-file-5c1aeb.s3.amazonaws.com
185.199.108.153               githubstatus.com
64.71.144.202                 github.community
23.100.27.125                 github.dev
185.199.108.133               media.githubusercontent.com


# Update time: 2021-11-25T10:15:58+08:00
# Update url: https://raw.hellogithub.com/hosts
# Star me: https://github.com/521xueweihan/GitHub520
# GitHub520 Host End
`;
  import Monaco from "@/components/Monaco.svelte";
  import { formatHosts } from "./formatter";
  import {
    Checkbox,
    Tabs,
    Tab,
    TabContent,
    StructuredList,
    StructuredListHead,
    StructuredListRow,
    StructuredListCell,
    StructuredListBody,
  } from "carbon-components-svelte";

  let tabs = [
    {
      k: 1,
      label: "LIST",
    },
    {
      k: 2,
      label: "CODE",
    },
  ];
  let list = formatHosts(hosts);
</script>

<div class="edit-container">
  <Tabs>
    {#each tabs as tab}
      <Tab label={tab.label} />
    {/each}

    <div slot="content">
      <TabContent>
        <Monaco value={hosts} />
      </TabContent>
      <TabContent>
        <StructuredList>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>IP</StructuredListCell>
              <StructuredListCell head>HOST</StructuredListCell>
              <StructuredListCell head>ISSELECTED</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>

          <StructuredListBody>
            {#each list as item}
              <StructuredListRow>
                <StructuredListCell noWrap>{item.ip}</StructuredListCell>
                <StructuredListCell noWrap>{item.host}</StructuredListCell>
                <StructuredListCell noWrap>
                  <Checkbox checked={item.selected} />
                </StructuredListCell>
              </StructuredListRow>
            {/each}
          </StructuredListBody>
        </StructuredList>
      </TabContent>
    </div>
  </Tabs>
</div>

<style>
</style>
