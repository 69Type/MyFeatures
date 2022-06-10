function asyncQuerySelector(selector, searchIn, timeout) {
        return new window.Promise(function(resolve, reject) {
            var timeoutId;
            var observer;
            var element = null;

            if (typeof timeout == 'number' && timeout > 0) {
                timeoutId = setTimeout(function() {
                    observer.disconnect();
                    reject(new Error("timeout"));
                }, timeout);
            }

            observer = new MutationObserver(function(mutations) {
                for (var mi = 0; mi < mutations.length; mi++) {
                    var mutation = mutations[mi];
                    var addedNodes = mutation.addedNodes || [];

                    for (var ani = 0; ani < addedNodes.length; ani++) {
                        var node = addedNodes[ani];
                        element = node.matches && node.matches(selector) ? node : (node.querySelector ? node.querySelector(selector) : null);
                        if (element) {
                            if (timeoutId) clearTimeout(timeoutId);
                            observer.disconnect();
                            return resolve(element);
                        }
                    }
                }
            });

            observer.observe(searchIn || document, {
                attributes: false,
                childList: true,
                subtree: true
            });
        });
    };
