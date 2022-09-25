<?php
namespace OCA\Memories\Controller;

use OCP\IRequest;
use OCP\AppFramework\Services\IInitialState;
use OCP\AppFramework\Http\TemplateResponse;
use OCA\Viewer\Event\LoadViewer;
use OCA\Files\Event\LoadSidebar;
use OCP\AppFramework\Controller;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IConfig;
use OCP\IUserSession;
use OCP\Util;

use OCA\Memories\AppInfo\Application;

class PageController extends Controller {
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
        IConfig $config) {

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
     * @NoCSRFRequired
     */
    public function main() {
        $user = $this->userSession->getUser();
        if (is_null($user)) {
            return null;
        }

        Util::addScript($this->appName, 'memories-main');

        $this->eventDispatcher->dispatchTyped(new LoadSidebar());
        $this->eventDispatcher->dispatchTyped(new LoadViewer());

        $uid = $user->getUid();
        $timelinePath = \OCA\Memories\Util::getPhotosPath($this->config, $uid);
        $this->initialState->provideInitialState('timelinePath', $timelinePath);
        $this->initialState->provideInitialState('showHidden',  $this->config->getUserValue(
            $uid, Application::APPNAME, 'showHidden', false));

        $response = new TemplateResponse($this->appName, 'main');
        return $response;
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function folder() {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function favorites() {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function videos() {
        return $this->main();
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function archive() {
        return $this->main();
    }
}
