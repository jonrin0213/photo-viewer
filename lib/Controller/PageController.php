<?php

namespace OCA\Memories\Controller;

use OCA\Files\Event\LoadSidebar;
use OCA\Memories\Util;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\Util as OCPUtil;

class PageController extends Controller
{
    protected $userId;
    protected $appName;
    protected IEventDispatcher $eventDispatcher;
    private IInitialState $initialState;
    private IUserSession $userSession;
    private IConfig $config;

    public function __construct(
        string $AppName,
        IRequest $request,
        $UserId,
        IEventDispatcher $eventDispatcher,
        IInitialState $initialState,
        IUserSession $userSession,
        IConfig $config
    ) {
        parent::__construct($AppName, $request);
        $this->userId = $UserId;
        $this->appName = $AppName;
        $this->eventDispatcher = $eventDispatcher;
        $this->initialState = $initialState;
        $this->userSession = $userSession;
        $this->config = $config;
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function main()
    {
        $user = $this->userSession->getUser();
        if (null === $user) {
            return null;
        }

        // Scripts
        OCPUtil::addScript($this->appName, 'memories-main');

        // Extra translations
        if (Util::recognizeIsEnabled()) {
            // Auto translation for tags
            OCPUtil::addTranslations('recognize');
        }

        $response = new TemplateResponse($this->appName, 'main');
        $response->setContentSecurityPolicy(self::getCSP());
        $response->cacheFor(0);

        // Check if requested from native app
        $userAgent = $this->request->getHeader('User-Agent');
        if (strpos($userAgent, 'memories-native') !== false) {
            $response->renderAs(TemplateResponse::RENDER_AS_BASE);
        } else {
            $this->eventDispatcher->dispatchTyped(new LoadSidebar());
        }

        return $response;
    }

    /** Get the common content security policy */
    public static function getCSP()
    {
        // Image domains MUST be added to the connect domain list
        // because of the service worker fetch() call
        $addImageDomain = function ($url) use (&$policy) {
            $policy->addAllowedImageDomain($url);
            $policy->addAllowedConnectDomain($url);
        };

        // Create base policy
        $policy = new ContentSecurityPolicy();
        $policy->addAllowedWorkerSrcDomain("'self'");
        $policy->addAllowedScriptDomain("'self'");
        $policy->addAllowedFrameDomain("'self'");
        $policy->addAllowedImageDomain("'self'");
        $policy->addAllowedMediaDomain("'self'");
        $policy->addAllowedConnectDomain("'self'");

        // Video player
        $policy->addAllowedWorkerSrcDomain('blob:');
        $policy->addAllowedScriptDomain('blob:');
        $policy->addAllowedMediaDomain('blob:');

        // Image editor
        $policy->addAllowedConnectDomain('data:');

        // Allow OSM
        $policy->addAllowedFrameDomain('www.openstreetmap.org');
        $addImageDomain('https://*.tile.openstreetmap.org');
        $addImageDomain('https://*.a.ssl.fastly.net');

        // Allow Nominatim
        $policy->addAllowedConnectDomain('nominatim.openstreetmap.org');

        return $policy;
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function folder()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function favorites()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function albums()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function videos()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function archive()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function thisday()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function recognize()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function facerecognition()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function places()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function tags()
    {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     *
     * @NoCSRFRequired
     */
    public function map()
    {
        return $this->main();
    }
}
