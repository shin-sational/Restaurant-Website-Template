export const VALIDATION_MESSAGES = {
  en: {
    firstName: {
      min: "First name must be at least 2 characters",
      max: "First name must be no more than 50 characters",
    },
    lastName: {
      min: "Last name must be at least 2 characters",
      max: "Last name must be no more than 50 characters",
    },
    email: "Please enter a valid email address",
    message: {
      min: "Message must be at least 10 characters",
      max: "Message must be no more than 500 characters",
    },
  },
  ja: {
    firstName: {
      min: "名前は2文字以上で入力してください",
      max: "名前は50文字以内で入力してください",
    },
    lastName: {
      min: "名字は2文字以上で入力してください",
      max: "名字は50文字以内で入力してください",
    },
    email: "有効なメールアドレスを入力してください",
    message: {
      min: "メッセージは10文字以上で入力してください",
      max: "メッセージは500文字以内で入力してください",
    },
  },
};
