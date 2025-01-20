/**
 * Notion のプロパティから、値を抽出する汎用関数
 * @param property Notion のプロパティオブジェクト
 * @returns string | JSX.Element | string[] | null
 */
export function getNotionPropertyValue(
  property: any
): string | JSX.Element | string[] | null {
  if (!property) return null;

  // Notion プロパティの「型」を取得
  const { type } = property;

  let value: string | JSX.Element | string[] | null = null;

  switch (type) {
    /**
     * 例：
     * {
     *   "type": "title",
     *   "title": [
     *       { "type": "text", "text": { "content": "サンプル" }, "plain_text": "サンプル", ... }
     *   ]
     * }
     */
    case "title": {
      // title は配列の先頭から plain_text を結合
      const texts = property.title ?? [];
      value = texts.map((t: any) => t.plain_text).join("") || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "rich_text",
     *   "rich_text": [
     *       { "type": "text", "plain_text": "サンプルテキスト", ... }
     *   ]
     * }
     */
    case "rich_text": {
      const texts = property.rich_text ?? [];
      value = texts.map((t: any) => t.plain_text).join("") || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "number",
     *   "number": 42
     * }
     */
    case "number": {
      value = property.number ?? null;
      if (value !== null) value = String(value);
      break;
    }

    /**
     * 例：
     * {
     *   "type": "select",
     *   "select": {
     *       "id": "xxxx",
     *       "name": "選択肢A",
     *       "color": "default"
     *   }
     * }
     */
    case "select": {
      value = property.select?.name || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "multi_select",
     *   "multi_select": [
     *       { "id": "xxxx", "name": "タグA", "color": "default" },
     *       { "id": "xxxx", "name": "タグB", "color": "blue" }
     *   ]
     * }
     */
    case "multi_select": {
      const selects = property.multi_select ?? [];
      // 複数要素の場合、配列で返すなど運用ルールに合わせる
      value = selects.map((s: any) => s.name);
      break;
    }

    /**
     * 例：
     * {
     *   "type": "date",
     *   "date": {
     *       "start": "2023-12-31",
     *       "end": null,
     *       "time_zone": null
     *   }
     * }
     */
    case "date": {
      value = property.date?.start || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "people",
     *   "people": [
     *       {
     *         "id": "ユーザーID",
     *         "name": "Taro",
     *         "person": { "email": "taro@example.com" },
     *         "avatar_url": "..."
     *       }
     *   ]
     * }
     */
    case "people": {
      const people = property.people ?? [];
      // ここでは名前のみを抽出する例
      value = people.map((p: any) => p.name);
      break;
    }

    /**
     * 例：
     * {
     *   "type": "files",
     *   "files": [
     *       {
     *         "name": "画像1.png",
     *         "file": { "url": "https://..." },
     *         ...
     *       },
     *       {
     *         "external": { "url": "https://example.com" }
     *       }
     *   ]
     * }
     */
    case "files": {
      const files = property.files ?? [];
      // file.url または external.url を取得
      value =
        files.length > 0 ? files[0].file?.url || files[0].external?.url : null;

      break;
    }

    /**
     * 例：
     * {
     *   "type": "checkbox",
     *   "checkbox": true
     * }
     */
    case "checkbox": {
      // Notion の値そのままを返す（true / false）
      value = property.checkbox;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "url",
     *   "url": "https://example.com"
     * }
     */
    case "url": {
      value = property.url || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "email",
     *   "email": "user@example.com"
     * }
     */
    case "email": {
      value = property.email || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "phone_number",
     *   "phone_number": "090-xxxx-xxxx"
     * }
     */
    case "phone_number": {
      value = property.phone_number || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "created_time",
     *   "created_time": "2023-01-01T00:00:00.000Z"
     * }
     */
    case "created_time": {
      value = property.created_time || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "created_by",
     *   "created_by": {
     *     "id": "...", "name": "UserName", ...
     *   }
     */
    case "created_by": {
      value = property.created_by?.name || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "last_edited_time",
     *   "last_edited_time": "2023-01-01T00:00:00.000Z"
     * }
     */
    case "last_edited_time": {
      value = property.last_edited_time || null;
      break;
    }

    /**
     * 例：
     * {
     *   "type": "last_edited_by",
     *   "last_edited_by": {
     *     "id": "...", "name": "UserName", ...
     *   }
     */
    case "last_edited_by": {
      value = property.last_edited_by?.name || null;
      break;
    }

    default:
      // ここに来る場合は、まだ対応していない Notion プロパティ型かもしれません
      value = null;
      break;
  }

  return value;
}
