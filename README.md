01\. Gitのインストールとバージョン確認

macにはgitがインストールされている(らしい)  
もし、インストールされていない場合は`git --version`を実行するとインストールするか聞かれるらしいです

gitのバージョンを確認する
```
git --version
> git version 2.33.0
```

---

06\. ブランチの作成と切り替え  

```
git branch dev #ブランチの作成
git checkout dev # ブランチの移動
```
OR
```
git checkout -b "dev"
```
確認
```
git branch
> * dev
    main
```
