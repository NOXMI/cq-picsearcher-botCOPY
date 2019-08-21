import Axios from 'axios';

/**
 * 新浪短网址
 *
 * @param {string} url 长网址
 * @returns 短网址
 */
function shorten(url) {
    const req = `http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long=${encodeURIComponent(url)}`;
    return Axios.get(req)
        .then(r => {
            const t_cn = r.data[0].url_short;
            return {
                result: t_cn,
                id: /t\.cn\/(.+)/.exec(t_cn)[1],
                error: false,
            };
        })
        .catch(() => ({
            result: url,
            error: true,
        }));
}

export default shorten;
