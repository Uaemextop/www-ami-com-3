function GAEventDirectPush(DataLayerObject) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(DataLayerObject);
}
export { GAEventDirectPush };