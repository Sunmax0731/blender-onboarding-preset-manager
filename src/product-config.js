export const productConfig = {
  "product": {
    "rank": 13,
    "tier": "P0",
    "score": 68,
    "domain": "BlenderAddon",
    "ideaNo": 2,
    "ideaName": "導入・プリセット管理",
    "repository": "blender-onboarding-preset-manager",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "Blender初心者向け導入支援として単体価値があり、診断系アドオンの入口になる。",
    "surface": "Blender アドオン導入前に使える CLI と Blender Python host adapter",
    "integration": "",
    "overview": "初期設定、用途別テンプレート、頻出設定をまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "毎回の設定や入力が重複し、作業開始までに時間がかかる。",
    "differentiation": "Blender内の3D素材制作、BOOTH販売、Unity連携の流れに寄せる。 日本語の用途別プリセットと実行履歴を残す。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
