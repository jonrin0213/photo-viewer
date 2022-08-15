<?php
namespace OCA\BetterPhotos\Controller;

use OCP\IRequest;
use OCP\AppFramework\Http\TemplateResponse;
use OCA\Viewer\Event\LoadViewer;
use OCP\AppFramework\Controller;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Util;

class PageController extends Controller {
	protected string $userId;
	protected $appName;
	protected IEventDispatcher $eventDispatcher;

	public function __construct(
		string $AppName,
		IRequest $request,
		string $UserId,
		IEventDispatcher $eventDispatcher,
	){
		parent::__construct($AppName, $request);
		$this->userId = $UserId;
		$this->appName = $AppName;
		$this->eventDispatcher = $eventDispatcher;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function index() {
		Util::addScript($this->appName, 'betterphotos-main');
		Util::addStyle($this->appName, 'icons');

		$this->eventDispatcher->dispatchTyped(new LoadViewer());

		$response = new TemplateResponse($this->appName, 'main');
		return $response;
	}

}
