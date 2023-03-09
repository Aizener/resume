export const useMobileHeaderFn = () => {
  let isShow = $ref(false);
  const handleChangeShow = (_isShow: boolean) => {
    isShow = _isShow;
  }
  return {
    isShow: $$(isShow),
    handleChangeShow
  }
}

export const useMobileDesignFn = () => {
  let isShow = $ref(false);
  const handleChangeShow = (_isShow: boolean) => {
    isShow = _isShow;
  }
  return {
    isShow: $$(isShow),
    handleChangeShow
  }
}