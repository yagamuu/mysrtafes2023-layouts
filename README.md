# Mystery Dungeon RTA FES 4 Layouts
第4回不思議のダンジョンシリーズRTAフェスというイベント用に作成したNodeCGのbundleです。  
This is the [NodeCG](http://github.com/nodecg/nodecg) bundle used for the streaming overlay in Mystery Dungeon RTA FES 4.  

## Usage
- 開発には`Visual Studio Code devcontainer`を使用しており、設定ファイルを同梱しています。`Visual Studio Code`並びに`Docker`のインストールを推奨します。
- プロジェクトディレクトリに`/cfg`ディレクトリを作成し、各種bundle用の設定jsonファイルを配置
    - 当bundleは[nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol)のTwitch連携機能を別ユーザーから使用するために独自のAPIアクセスを行っており、そのために必要な各種TwitchAPI用のパラメーターを設定する必要があります。
      - プロパティ名などは`configschema.json`から確認してください

## Credits
- [NodeCG](https://github.com/nodecg/nodecg): Main framework.
- [nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol): NodeCG bundle for broadcast graphics framework/application.
- [nodecg-vue-ts-template](https://github.com/zoton2/nodecg-vue-ts-template): Template for NodeCG bundles that use Vue.js and TypeScript.
- [nodecg-spotify-widget](https://github.com/cma2819/nodecg-spotify-widget): NodeCG layout bundle for showing spotify information.
- [Kajiro](https://twitter.com/jiro90000): Graphics design, Setup background illust, Event image character design.
- [Icarus](https://twitter.com/UranosTubasaPMD): Event image character design.
- [bear](https://twitter.com/bearfaust0123): HTML/CSS coding.
- [isuZu](https://twitter.com/y_isuZu): Marathon Logo.